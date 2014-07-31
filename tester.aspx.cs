using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class tester : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        Response.Clear();
        System.Threading.Thread.Sleep(10000);
        Response.Write(Request.Form["data"].ToString());
        Response.End();
    }
}