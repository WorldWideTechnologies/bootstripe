<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %>&nbsp;|&nbsp;$SiteConfig.Title</title>
    $MetaTags(false)
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

    <%--Need to add favicons plugin--%>

    <link rel="stylesheet" href="/themes/default/public/css/vendor.css">
    <link rel="stylesheet" href="/themes/default/public/css/app.css">

    $SiteConfig.CustomHeaderOutput.RAW
</head>
<body>
    <% if $SiteConfig.ShowResponsiveOutput %>
    <div id="responsive"><div></div></div>
    <% end_if %>

    <% include Header %>
    $Layout
    <% include Footer %>

<script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=true"></script>

<script src="/themes/default/public/javascript/vendor.js"></script>
<script src="/themes/default/public/javascript/app.js"></script>

    $SiteConfig.CustomFooterOutput.RAW
</body>
</html>
