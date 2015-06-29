<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %>&nbsp;|&nbsp;$SiteConfig.Title</title>
    <% base_tag %>
    $MetaTags(false)
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="$MetaDescription">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="msapplication-square70x70logo" content="$ThemeDir/windows-tile-70x70.png">
    <meta name="msapplication-square150x150logo" content="$ThemeDir/windows-tile-150x150.png">
    <meta name="msapplication-square310x310logo" content="$ThemeDir/windows-tile-310x310.png">
    <meta name="msapplication-TileImage" content="$ThemeDir/windows-tile-144x144.png">
    <meta name="msapplication-TileColor" content="#231f20">
    <link rel="apple-touch-icon" sizes="152x152" href="$ThemeDir/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="120x120" href="$ThemeDir/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="76x76" href="$ThemeDir/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="60x60" href="$ThemeDir/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="144x144" href="$ThemeDir/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="114x114" href="$ThemeDir/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="$ThemeDir/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="57x57" href="$ThemeDir/apple-touch-icon.png">
    <link rel="shortcut icon" href="$ThemeDir/favicon.ico">
    <link rel="icon" type="image/png" sizes="64x64" href="$ThemeDir/favicon.png">

    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic">

    <link rel="stylesheet" href="/themes/default/css/layout.css">
    <link rel="stylesheet" href="/themes/default/bower_components/font-awesome/css/font-awesome.css">

    $SiteConfig.CustomHeaderOutput.RAW
</head>
<body>
    <% if $SiteConfig.ShowResponsiveOutput %>
    <div id="responsive"><div></div></div>
    <% end_if %>

    <% include Header %>
    <main>
        $Layout
    </main>
    <% include Footer %>

<script type="text/javascript" src="//maps.google.com/maps/api/js?sensor=true"></script>

<script src="/themes/default/javascript/layout.js"></script>

    $SiteConfig.CustomFooterOutput.RAW
</body>
</html>