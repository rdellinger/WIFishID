Imports System
Imports System.Web
Imports System.Web.UI
Imports System.Web.UI.WebControls
Imports DotNetNuke
Imports System.Collections.Generic
Imports Aqua.DNN.Modules.WIFishID.Business


Namespace Aqua.DNN.Modules.WIFishID

    Partial Public Class Search
        Inherits Entities.Modules.PortalModuleBase
        Implements Entities.Modules.IActionable


#Region "Event Handlers"




        Protected Sub Page_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

            Try

                If Not Page.IsPostBack Then

                    'Register the JQuery and plugins scripts
                    RegisterJQueryScripts()

                    'List all fish by default
                    ListAllFish()

                End If


            Catch exc As Exception        'Module failed to load

                ProcessModuleLoadException(Me, exc)

            End Try

        End Sub





        Sub ListAllFish()

            'Build a new query from the text in the search box
            Dim objFishController As New FishController
            Dim objFishList As New ArrayList

            objFishList = objFishController.List

            rptAllFishList.DataSource = objFishList
            rptAllFishList.DataBind()

        End Sub








        Function GetDetailsPageURL(ByVal FishID As Integer) As String

            Dim s As New StringBuilder

            s.Append(Settings("DetailsPageURL"))
            s.Append("&FishID=")
            s.Append(FishID)

            Return s.ToString

        End Function










        Function GetMainImage(ByVal FishID As Integer, ByVal ThumbnailOrFull As String) As String

            Dim objImageController As New ImageController
            Dim objImageInfo As New ImageInfo
            Dim s As New StringBuilder

            objImageInfo = objImageController.GetMainImageIDByFishID(FishID)

            If ThumbnailOrFull = "Thumbnail" Then
                s.Append("images/Thumbnails/")
            Else
                s.Append("images/Large_Images/")
            End If

            s.Append(objImageInfo.ImageID)
            s.Append(".png")

            Return s.ToString

        End Function








        Protected Sub lnkSearchTab_Click(sender As Object, e As EventArgs) Handles lnkSearchTab.Click

            'Make the selected tab bold
            lblSearchTab.Visible = True
            lnkSearchTab.Visible = False
            lnkIdentifyByAppearanceTab.Visible = True
            lblIdentifyByAppearanceTab.Visible = False

            'Show the search box, hide the appearance filter choices
            pnlSearch.Visible = True
            pnlIdentifyByAppearance.Visible = False

            'Reset the search to include all fish
            ListAllFish()


        End Sub




        Protected Sub lnkIdentifyByAppearanceTab_Click(sender As Object, e As EventArgs) Handles lnkIdentifyByAppearanceTab.Click

            'Make the selected tab bold
            lblSearchTab.Visible = False
            lnkSearchTab.Visible = True
            lnkIdentifyByAppearanceTab.Visible = False
            lblIdentifyByAppearanceTab.Visible = True

            'Hide the search box, show the appearance filter choices
            pnlSearch.Visible = False
            pnlIdentifyByAppearance.Visible = True

            'Reset the search to include all fish
            ListAllFish()

            'Clear out the search box
            txtSearch.Text = ""


        End Sub








        Sub RegisterJQueryScripts()

            'Register the JQuery script
            DotNetNuke.Framework.jQuery.RequestRegistration()

            'Register the JQuery UI library
            If Not DotNetNuke.UI.Utilities.ClientAPI.IsClientScriptBlockRegistered(Page, "jquery-ui.js") Then
                DotNetNuke.UI.Utilities.ClientAPI.RegisterClientScriptBlock(Page, "jquery-ui.js", "<script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.js' type=""text/javascript""></script>")
            End If

            'Register the innerFade JQuery plugin
            If Not DotNetNuke.UI.Utilities.ClientAPI.IsClientScriptBlockRegistered(Page, "WIFishID_Search.js") Then
                DotNetNuke.UI.Utilities.ClientAPI.RegisterClientScriptBlock(Page, "WIFishID_Search.js", "<script src=""" & Request.ApplicationPath & "/DesktopModules/WIFishID_Search/js/WIFishID_Search.js"" type=""text/javascript""></script>")
            End If

            'Register jQuery to detect mobile browsers and redirect to mobile version
            If Not DotNetNuke.UI.Utilities.ClientAPI.IsClientScriptBlockRegistered(Page, "detectmobilebrowser.js") Then
                DotNetNuke.UI.Utilities.ClientAPI.RegisterClientScriptBlock(Page, "detectmobilebrowser.js", "<script src=""" & Request.ApplicationPath & "/DesktopModules/WIFishID_Search/js/detectmobilebrowser.js"" type=""text/javascript""></script>")
            End If


        End Sub





#End Region

#Region "Optional Interfaces"
        Public ReadOnly Property ModuleActions() As Entities.Modules.Actions.ModuleActionCollection Implements Entities.Modules.IActionable.ModuleActions
            Get
                Dim Actions As New Entities.Modules.Actions.ModuleActionCollection
                Actions.Add(GetNextActionID, Localization.GetString(Entities.Modules.Actions.ModuleActionType.AddContent, LocalResourceFile), Entities.Modules.Actions.ModuleActionType.AddContent, "", "", EditUrl(), False, DotNetNuke.Security.SecurityAccessLevel.Edit, True, False)
                Return Actions
            End Get
        End Property



#End Region






        





    End Class

End Namespace




