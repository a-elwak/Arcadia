]export const gotoPage = () =>

{
    browser.url("http://www.topshop.com")
}

export const hasLogo = () =>

{
    browser.element('<a id="store_logo" itemprop="url" href="http://www.topshop.com/" title="Topshop Homepage" accesskey="1"><img itemprop="logo" src="http://media.topshop.com/wcsstore/ConsumerDirectStorefrontAssetStore/images/colors/color7/v3/logo.gif" alt="Topshop Logo"></a>')
}





