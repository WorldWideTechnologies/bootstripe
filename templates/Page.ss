<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %>&nbsp;|&nbsp;$SiteConfig.Title</title>
    <% base_tag %>
    $MetaTags(false)
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

    <link rel="apple-touch-icon" sizes="57x57" href="/themes/default/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/themes/default/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/themes/default/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/themes/default/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/themes/default/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/themes/default/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/themes/default/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/themes/default/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/themes/default/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="/themes/default/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/themes/default/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="/themes/default/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/themes/default/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/themes/default/manifest.json">
    <link rel="shortcut icon" href="/themes/default/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/themes/default/mstile-144x144.png">
    <meta name="msapplication-config" content="/themes/default/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    <link rel="stylesheet" href="/themes/default/css/vendor.css">
    <link rel="stylesheet" href="/themes/default/css/layout.css">

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

<script src="/themes/default/javascript/vendor.js"></script>
<script src="/themes/default/javascript/layout.js"></script>

    $SiteConfig.CustomFooterOutput.RAW
</body>
</html>
