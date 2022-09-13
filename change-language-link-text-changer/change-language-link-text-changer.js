/*	**************************************************************************
	*   @preserve
	*   VistaPanel Add-on
	*   Script Name: "Change Language" Link and Text Changer
	*   Author: AADev & Wybe Network
	*   Author URL: https://aadev.wybenetwork.com
	*   Version: 1.0
	*   GitHub Project URL: https://github.com/WybeNetwork/VistaPanel-Customizations
	*   Official Website URL: https://wybenetwork.com
	*   This file is licensed under MIT Attribution
	*   Last Updated on 08 August 2020 by AADev
	************************************************************************** 
*/
var t = ["item_", "icon-"];
for (n=0; n<=1; n++)
{
document.getElementById(`${t[n]}change_language`).setAttribute("href", change_language_link)
document.getElementById(`${t[n]}change_language`).innerHTML=change_language_text;
}