using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace AspNetCoreDocumentViewerDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // disable access to the external (web) resources
            Vintasoft.Imaging.Web.Services.VintasoftImageWebService.AllowAccessToExternalResources = false;
            Vintasoft.Imaging.ImagingEnvironment.ExternalResourceManager.VerifyResourceAccess += ExternalResourceManager_VerifyResourceAccess;

            CreateHostBuilder(args).Build().Run();
        }

        /// <summary>
        /// Handles ExternalResourceManager.VerifyResourceAccess event.
        /// </summary>
        private static void ExternalResourceManager_VerifyResourceAccess(object sender, Vintasoft.Imaging.ExternalResourceVerifyAccessEventArgs e)
        {
            // if is external (web) resource
            if (e.Uri.IsAbsoluteUri && !e.Uri.IsFile)
            {
                // may verify external (web) resource accsess
                //e.IsAccessAllowed = ...;
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
