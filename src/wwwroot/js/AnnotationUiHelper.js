var AnnotationUiHelperJS = function () { }

/**
 Initializes the annotation visual tool.
 @param docViewer The document viewer.
*/
AnnotationUiHelperJS.initializeAnnotationVisualTool = function (docViewer) {
    /**
     * Focused annotation view collection is changed in annotation visual tool.
     */
    function annotationVisualTool_focusedAnnotationCollectionChanged(event, eventArgs) {
        if (eventArgs.previouslyFocusedCollection != null) {
            Vintasoft.Shared.unsubscribeFromEvent(eventArgs.previouslyFocusedCollection, "changed", annotationViewCollection_changed);
        }

        if (eventArgs.focusedCollection != null) {
            Vintasoft.Shared.subscribeToEvent(eventArgs.focusedCollection, "changed", annotationViewCollection_changed);
        }
    }

    /**
     * Annotation view collection is changed.
     */
    function annotationViewCollection_changed(event, eventArgs) {
        // if new annotation is inserted in annotation collection
        if (eventArgs.actionName == "insert") {
            // get inserted annotation
            var annotation = eventArgs.annotation;

            // if annotation is ReferencedImage-annotation
            if (annotation.get_Type() == "ReferencedImageAnnotation") {
                // annotation image is not defined
                if (annotation.get_Url() == "") {
                    var defaultImage = new Image();
                    defaultImage.src = "Images/VintaSoftLogo.svg";
                    // set an image url when annotation is created
                    annotation.set_Url(defaultImage.src);
                }
            }
            // if annotation is Link-annotation
            else if (annotation.get_Type() == "LinkAnnotation") {
                // subscribe to the "annotationMouseEvent" event of annotation
                Vintasoft.Shared.subscribeToEvent(annotation, 'annotationMouseEvent', __annotation_annotationMouseEvent);
            }
        }
        // if annotation is removed from annotation collection
        else if (eventArgs.actionName == "remove") {
            // get removed annotation
            var annotation = eventArgs.annotation;

            // if annotation is Link-annotation
            if (annotation.get_Type() == "LinkAnnotation") {
                // unsubscribe from the "annotationMouseEvent" event of annotation
                Vintasoft.Shared.unsubscribeFromEvent(annotation, 'annotationMouseEvent', __annotation_annotationMouseEvent);
            }
        }
    }

    /**
     * Mouse is interacting with annotation.
     */
    function __annotation_annotationMouseEvent(event, eventArgs) {
        var originalEvent = eventArgs.originalEvent;
        var button = originalEvent.which;
        // if left mouse button is clicked on annotation
        if (eventArgs.eventName === 'click' && button === 1) {
            var linkAnnotation = this;
            var link = linkAnnotation.get_HyperLink();
            if (link === "")
                return;
            if (link.indexOf("http://") != 0 && link.indexOf("https://") != 0)
                link = "http://" + link;
            // open URL associated with annotation
            window.open(link, "_blank");
        }
    }


    // get annotation viewer, which is used in document viewer
    var annotationViewer = docViewer.get_ImageViewer();
    // get annotation visual, which is used by annotation viewer
    var annotationVisualTool = annotationViewer.get_AnnotationVisualTool();
    // subscribe to the "focusedAnnotationCollectionChanged" of annotationVisualTool
    Vintasoft.Shared.subscribeToEvent(annotationVisualTool, "focusedAnnotationCollectionChanged", annotationVisualTool_focusedAnnotationCollectionChanged);
}
