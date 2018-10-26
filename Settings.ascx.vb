Imports System
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports DotNetNuke
Imports Aqua.DNN.Modules.AquaBlog.Business


Namespace Aqua.DNN.Modules.WIFishID

    Partial Public Class Settings
        Inherits Entities.Modules.ModuleSettingsBase



        Public Overrides Sub LoadSettings()
            Try
                If Not Page.IsPostBack Then

                    If Not Settings("DetailsPageURL") Is Nothing Then
                        txtDetailsPageURL.Text = Settings("DetailsPageURL")
                    End If


                End If

            Catch exc As Exception
                ProcessModuleLoadException(Me, exc)
            End Try
        End Sub




        Public Overrides Sub UpdateSettings()
            Try
                Dim objModules As New Entities.Modules.ModuleController

                ' Update ModuleSettings
                objModules.UpdateModuleSetting(ModuleId, "DetailsPageURL", txtDetailsPageURL.Text)


                ' Redirect back to the portal home page
                Response.Redirect(NavigateURL(), True)

            Catch exc As Exception
                ProcessModuleLoadException(Me, exc)
            End Try
        End Sub


    End Class

End Namespace

