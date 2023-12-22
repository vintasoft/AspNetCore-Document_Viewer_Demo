var _fileService;

var _docViewer;

var _localizer;

var _openFileHelper;

var _previouslyUploadedFilesDialog;

var _blockUiDialog;



// === "File" toolbar, "Previously uploaded files" button ===

/**
 Creates UI button for showing the list with previously uploaded files.
*/
function __createPreviousUploadFilesButton() {
    // create the button that allows to show a dialog with previously uploaded image files and select image file
    var button = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
        cssClass: "uploadedFilesList",
        title: "Previously Uploaded Files",
        localizationId: "previousUploadFilesButton",
        onClick: __previousUploadFilesButton_clicked
    });
    return button;
}

function __previousUploadFilesButton_clicked(event, uiElement) {
    var docViewer = uiElement.get_RootControl();
    if (docViewer != null) {
        // if dialog does not exist
        if (_previouslyUploadedFilesDialog == null)
            // create dialog
            _previouslyUploadedFilesDialog = new PreviouslyUploadedFilesDialogJS(_fileService, docViewer, _openFileHelper, __showErrorMessage);
        // show the dialog
        _previouslyUploadedFilesDialog.show();
    }
}



// === "Tools" toolbar ===

/**
 Creates UI button for activating the visual tool, which allows to select text and work with annotations in image viewer.
*/
function __createTextSelectionAndAnnotationToolButton() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiVisualToolButtonJS({
        cssClass: "vsdv-tools-textSelectionToolButton",
        title: "Annotations, Document navigation, Text selection",
        localizationId: "annotationAndNavigationAndTextSelectionToolButton"
    }, "AnnotationVisualTool,DocumentNavigationTool,TextSelectionTool");
}



// === Init UI ===

/**
 Registers custom UI elements in "WebUiElementsFactoryJS".
*/
function __registerNewUiElements() {
    // register the "Previously uploaded files" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("previousUploadFilesButton", __createPreviousUploadFilesButton);

    // register the "Annotations, Document navigation, Text selection" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("annotationAndNavigationAndTextSelectionToolButton", __createTextSelectionAndAnnotationToolButton);
}

/**
 Initializes main menu of document viewer.
 @param {object} docViewerSettings Settings of document viewer.
*/
function __initMenu(docViewerSettings) {
    // get items of document viewer
    var items = docViewerSettings.get_Items();

    var uploadFileButton = items.getItemByRegisteredId("uploadFileButton");
    if (uploadFileButton != null)
        uploadFileButton.set_FileExtensionFilter(".bmp, .emf, .gif, .ico, .cur, .jpg, .jpeg, .jls, .pcx, .png, .tif, .tiff, .wmf, .jb2, .jbig2, .jp2, .j2k, .j2c, .jpc, .pdf, .docx, .doc, .xlsx, .xls");

    // get the "File" menu panel
    var fileMenuPanel = items.getItemByRegisteredId("fileToolbarPanel");
    // if menu panel is found
    if (fileMenuPanel != null) {
        // get items of file menu panel
        var fileMenuPanelItems = fileMenuPanel.get_Items();

        // add the "Previous uploaded files" button to the menu panel
        fileMenuPanelItems.insertItem(1, "previousUploadFilesButton");
    }

    // get the "Visual tools" menu panel
    var toolsSubmenu = items.getItemByRegisteredId("visualToolsToolbarPanel");
    // if menu panel is found
    if (toolsSubmenu != null) {
        toolsSubmenuItems = toolsSubmenu.get_Items();

        toolsSubmenuItems.removeItemAt(1);

        toolsSubmenuItems.insertItem(0, "annotationAndNavigationAndTextSelectionToolButton");
    }
}

/**
 Initializes side panel of document viewer.
 @param {object} docViewerSettings Settings of document viewer.
*/
function __initSidePanel(docViewerSettings) {
    // get items of document viewer
    var items = docViewerSettings.get_Items();

    var sidePanel = items.getItemByRegisteredId("sidePanel");
    if (sidePanel != null) {
        var sidePanelItems = sidePanel.get_PanelsCollection();

        sidePanelItems.addItem("textSelectionPanel");

        var textSearchPanel = Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("textSearchPanel");
        textSearchPanel.set_CreatePageResultHeaderContentCallback(__createPageSearchResultHeaderContent);
        sidePanelItems.addItem(textSearchPanel);
    }

    // get the thumbnail viewer panel of document viewer
    var thumbnailViewerPanel = items.getItemByRegisteredId("thumbnailViewerPanel");
    // if panel is found
    if (thumbnailViewerPanel != null)
        // subscribe to the "actived" event of the thumbnail viewer panel of document viewer
        Vintasoft.Shared.subscribeToEvent(thumbnailViewerPanel, "activated", __thumbnailsPanelActivated);
}

/**
 Returns UI elements, which will display information image page search result.
 @param {any} image Image, where text was searched.
 @param {any} imageIndex The number of pages, which have already been processed.
 @param {any} searchResults Search result.
*/
function __createPageSearchResultHeaderContent(image, imageIndex, searchResults) {
    return [new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({
        text: Vintasoft.Shared.VintasoftLocalizationJS.getStringConstant("vsdv-textSearchPanel-pageLabel") + " #" + (imageIndex + 1),
        css: { cursor: "pointer" }
    })];
}

/**
 Thumbnail viewer panel of document viewer is activated.
*/
function __thumbnailsPanelActivated() {
    var thumbnailViewer = this.get_ThumbnailViewer();
    if (thumbnailViewer != null) {
        // create the progress image
        var progressImage = new Image();
        progressImage.src = __getApplicationUrl() + "Images/fileUploadProgress.gif";
        // specify that the thumbnail viewer must use the progress image for indicating the thumbnail loading progress
        thumbnailViewer.set_ProgressImage(progressImage);

        // additional bottom space for text with page number under thumbnail
        var textCaptionHeight = 18;
        var padding = thumbnailViewer.get_ThumbnailPadding();
        padding[2] += textCaptionHeight
        thumbnailViewer.set_ThumbnailPadding(padding);
        thumbnailViewer.set_DisplayThumbnailCaption(true);
    }
}



// === Visual Tools ===

/**
 Initializes visual tools.
 @param {object} docViewer The document viewer.
*/
function __initializeVisualTools(docViewer) {
    var panTool = docViewer.getVisualToolById("PanTool");
    panTool.set_DisableContextMenu(true);

    var magnifierTool = docViewer.getVisualToolById("MagnifierTool");
    magnifierTool.set_DisableContextMenu(true);

    var zoomTool = docViewer.getVisualToolById("ZoomTool");
    zoomTool.set_DisableContextMenu(true);

    var zoomSelectionTool = docViewer.getVisualToolById("ZoomSelectionTool");
    zoomSelectionTool.set_DisableContextMenu(true);

    // get navigation tool
    var documentNavigationTool = docViewer.getVisualToolById("DocumentNavigationTool");
    // create navigation action executor
    var nagivationActionExecutor = new Vintasoft.Imaging.WebNavigationActionExecutorJS();
    // create URI action executor
    var uriActionExecutor = new WebUriActionExecutor();
    // create composite action executor
    var compositeActionExecutor = new Vintasoft.Imaging.WebPageContentActionCompositeExecutorJS([uriActionExecutor, nagivationActionExecutor]);
    // use composite action executer in document navigation tool
    documentNavigationTool.set_ActionExecutor(compositeActionExecutor);

    // initialize the annotation visual tool
    AnnotationUiHelperJS.initializeAnnotationVisualTool(docViewer);
}



// === Document viewer events ===

function __docViewer_warningOccured(event, eventArgs) {
    // show the alert if warning occured
    __showErrorMessage(eventArgs.message);
}

function __docViewer_asyncOperationStarted(event, data) {
    // get description of asynchronous operation
    var description = data.description;

    // if image is prepared for printing
    if (description === "Image prepared to print" || description === "Get text region") {
        // do not block UI when images are preparing for printing
    }
    else {
        // block UI
        __blockUI(data.description);
    }
}

function __docViewer_asyncOperationFinished(event, data) {
    // unblock UI
    __unblockUI();
}

function __docViewer_asyncOperationFailed(event, data) {
    // get description of asynchronous operation
    var description = data.description;
    // get additional information about asynchronous operation
    var additionalInfo = data.data;
    // if additional information exists
    if (additionalInfo != null)
        // show error message
        __showErrorMessage(additionalInfo);
    // if additional information does NOT exist
    else
        // show error message
        __showErrorMessage(description + ": unknown error.");
}



// === Utils ===

/**
 Blocks the UI. 
 @param {string} text Message that describes why UI is blocked.
*/
function __blockUI(text) {
    _blockUiDialog = new BlockUiDialogJS(text);
}

/**
 Unblocks the UI.
*/
function __unblockUI() {
    if (_blockUiDialog != null) {
        _blockUiDialog.close();
        _blockUiDialog = null;
    }
}

/**
 Shows an error message.
 @param {object} data Information about error.
*/
function __showErrorMessage(data) {
    __unblockUI();
    new ErrorMessageDialogJS(data);
}

/**
 Returns application URL.
*/
function __getApplicationUrl() {
    var applicationUrl = window.location.toString();
    if (applicationUrl[applicationUrl.length - 1] != '/')
        applicationUrl = applicationUrl + '/';
    return applicationUrl;
}



// === Localization ===

/**
 Creates the dictionary for localization of application UI.
*/
function __createUiLocalizationDictionary() {
    var tempDialogs = [];
    __createDocumentViewerDialogsForLocalization(tempDialogs);
    __createDemoDialogsForLocalization(tempDialogs);

    var localizationDict = _localizer.getDocumentLocalizationDictionary();
    var localizationDictString = JSON.stringify(localizationDict, null, '\t');
    console.log(localizationDictString);

    var floatingContainer = document.getElementById("documentViewerContainer");
    for (var i = 0; i < tempDialogs.length; i++) {
        floatingContainer.removeChild(tempDialogs[i].get_DomElement());
        delete tempDialogs[i];
    }
}

/**
 Creates the dialogs, which are used in Web Document Viewer, for localization.
*/
function __createDocumentViewerDialogsForLocalization(tempDialogs) {
    var floatingContainer = document.getElementById("documentViewerContainer");

    var documentPasswordDialog = new Vintasoft.Imaging.UI.Dialogs.WebUiDocumentPasswordDialogJS();
    documentPasswordDialog.render(floatingContainer);
    tempDialogs.push(documentPasswordDialog);

    var imageSelectionDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebImageSelectionDialogJS();
    imageSelectionDialog.render(floatingContainer);
    tempDialogs.push(imageSelectionDialog);

    var printImagesDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebPrintImagesDialogJS();
    printImagesDialog.render(floatingContainer);
    tempDialogs.push(printImagesDialog);

    var imageViewerSettingsDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebImageViewerSettingsDialogJS();
    imageViewerSettingsDialog.render(floatingContainer);
    tempDialogs.push(imageViewerSettingsDialog);

    var thumbnailViewerSettingsDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebThumbnailViewerSettingsDialogJS();
    thumbnailViewerSettingsDialog.render(floatingContainer);
    tempDialogs.push(thumbnailViewerSettingsDialog);

    var rotateImageWithAnnotationsDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebRotateImageWithAnnotationsDialogJS();
    rotateImageWithAnnotationsDialog.render(floatingContainer);
    tempDialogs.push(rotateImageWithAnnotationsDialog);

    var uploadImageFromUrlDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebUiUploadImageFromUrlDialogJS();
    uploadImageFromUrlDialog.render(floatingContainer);
    tempDialogs.push(uploadImageFromUrlDialog);

    var exportFileSettingsDialog = new Vintasoft.Imaging.DocumentViewer.Dialogs.WebExportFileSettingsDialogJS();
    exportFileSettingsDialog.render(floatingContainer);
    tempDialogs.push(exportFileSettingsDialog);


    // create context menu panel
    var contextMenu = new Vintasoft.Imaging.DocumentViewer.UIElements.WebAnnotationViewerContextMenuJS();
    contextMenu.render(floatingContainer);
    tempDialogs.push(contextMenu);
}

/**
 Creates the dialogs, which are used in this demo, for localization.
*/
function __createDemoDialogsForLocalization(tempDialogs) {
    var floatingContainer = document.getElementById("documentViewerContainer");

    var textAnnotation = new Vintasoft.Imaging.Annotation.UI.WebTextAnnotationViewJS();

    // create the property grid with information about annotation properties
    var propertyGrid = new Vintasoft.Shared.WebPropertyGridJS(textAnnotation);

    // create the image processing dialog
    var annotationSettingsDialog = new Vintasoft.Imaging.UI.Dialogs.WebUiPropertyGridDialogJS(
        propertyGrid,
        {
            title: "Annotation settings",
            cssClass: "vsui-dialog annotationSettings",
            localizationId: "annotationSettingsDialog"
        });
    annotationSettingsDialog.render(floatingContainer);
    tempDialogs.push(annotationSettingsDialog);
}

/**
 Enables the localization of application UI.
*/
function __enableUiLocalization() {
    // if localizer is ready (localizer loaded localization dictionary)
    if (_localizer.get_IsReady()) {
        // localize DOM-elements of web page
        _localizer.localizeDocument();
    }
    // if localizer is NOT ready
    else
        // wait when localizer will be ready
        Vintasoft.Shared.subscribeToEvent(_localizer, "ready", function () {
            // localize DOM-elements of web page
            _localizer.localizeDocument();
        });

    // subscribe to the "dialogShown" event of document viewer
    Vintasoft.Shared.subscribeToEvent(_docViewer, "dialogShown", function (event, data) {
        _localizer.localizeDocument();
    });

    // subscribe to the "contextMenuShown" event of document viewer
    Vintasoft.Shared.subscribeToEvent(_docViewer, "contextMenuShown", function (event, data) {
        _localizer.localizeDocument();
    });
}



// === Main ===

/**
 Main function.
*/
function __main() {
    // set the session identifier
    var hiddenSessionFieldElement = document.getElementById('hiddenSessionField');
    Vintasoft.Shared.WebImagingEnviromentJS.set_SessionId(hiddenSessionFieldElement.value);

    // specify web services, which should be used in this demo

    _fileService = new Vintasoft.Shared.WebServiceControllerJS(__getApplicationUrl() + "vintasoft/api/MyVintasoftFileApi");

    Vintasoft.Shared.WebServiceJS.defaultFileService = _fileService;
    Vintasoft.Shared.WebServiceJS.defaultImageCollectionService = new Vintasoft.Shared.WebServiceControllerJS(__getApplicationUrl() + "vintasoft/api/MyVintasoftImageCollectionApi");
    Vintasoft.Shared.WebServiceJS.defaultImageService = new Vintasoft.Shared.WebServiceControllerJS(__getApplicationUrl() + "vintasoft/api/MyVintasoftImageApi");
    Vintasoft.Shared.WebServiceJS.defaultAnnotationService = new Vintasoft.Shared.WebServiceControllerJS(__getApplicationUrl() + "vintasoft/api/MyVintasoftAnnotationCollectionApi");

    // create UI localizer
    _localizer = new Vintasoft.Shared.VintasoftLocalizationJS();

    // register new UI elements
    __registerNewUiElements();

    // create the document viewer settings
    var docViewerSettings = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer", "documentViewer", true);
    // enable image uploading from URL
    docViewerSettings.set_CanUploadImageFromUrl(true);
    // specify that the meain menu should contain the annotation menu
    docViewerSettings.set_ShowAnnotationMenuInMainMenu(true);
    // specify that the side panel should contain the annotation list panel
    docViewerSettings.set_ShowAnnotationListPanelInSidePanel(true);
    // specify that document viewer should show "Export and download file" button instead of "Download file" button
    docViewerSettings.set_CanExportAndDownloadFile(true);
    docViewerSettings.set_CanDownloadFile(false);

    // initialize main menu of document viewer
    __initMenu(docViewerSettings);

    // initialize side panel of document viewer
    __initSidePanel(docViewerSettings);

    // create the document viewer
    _docViewer = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS(docViewerSettings);

    // subscribe to the "warningOccured" event of document viewer
    Vintasoft.Shared.subscribeToEvent(_docViewer, "warningOccured", __docViewer_warningOccured);
    // subscribe to the asyncOperationStarted event of document viewer
    Vintasoft.Shared.subscribeToEvent(_docViewer, "asyncOperationStarted", __docViewer_asyncOperationStarted);
    // subscribe to the asyncOperationFinished event of document viewer
    Vintasoft.Shared.subscribeToEvent(_docViewer, "asyncOperationFinished", __docViewer_asyncOperationFinished);
    // subscribe to the asyncOperationFailed event of document viewer
    Vintasoft.Shared.subscribeToEvent(_docViewer, "asyncOperationFailed", __docViewer_asyncOperationFailed);

    __initializeVisualTools(_docViewer);

    // get the image viewer of document viewer
    var imageViewer1 = _docViewer.get_ImageViewer();
    // specify that image viewer must show images in the single continuous column mode
    imageViewer1.set_DisplayMode(new Vintasoft.Imaging.WebImageViewerDisplayModeEnumJS("SingleContinuousColumn"));
    // specify that image viewer must show images in the fit width mode
    imageViewer1.set_ImageSizeMode(new Vintasoft.Imaging.WebImageSizeModeEnumJS("FitToWidth"));
    // enable vector rendering of PDF, DOCX and XLSX documents
    imageViewer1.set_UseVectorRendering(true);

    // create the progress image
    var progressImage = new Image();
    progressImage.src = __getApplicationUrl() + "Images/fileUploadProgress.gif";
    // specify that the image viewer must use the progress image for indicating the image loading progress
    imageViewer1.set_ProgressImage(progressImage);

    // get the visual tool
    var annotationNavigationTextSelectionTool = _docViewer.getVisualToolById("AnnotationVisualTool,DocumentNavigationTool,TextSelectionTool");
    _docViewer.set_MandatoryVisualTool(annotationNavigationTextSelectionTool);
    _docViewer.set_CurrentVisualTool(annotationNavigationTextSelectionTool);

    // copy the default file to the uploaded image files directory and open the file
    _openFileHelper = new OpenFileHelperJS(_docViewer, __showErrorMessage);
    _openFileHelper.openDefaultImageFile("VintasoftImagingDemo.pdf");

    $(document).ready(function () {
        // create the dictionary for localization of application UI
        //__createUiLocalizationDictionary();

        // enable the localization of application UI
        __enableUiLocalization();
    });
}



// run main function
__main();
