<div class="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
    <button class="menu-icon" type="button" data-toggle></button>
    <div class="title-bar-title">Menu</div>
</div>

<div class="top-bar" id="example-menu">
    <div class="row">
        <div class="top-bar-left">
            <ul class="vertical medium-horizontal dropdown menu" data-dropdown-menu>

                <li class="menu-text">BRAND</li>

                <% loop $Menu(1) %>
                    <li class="$LinkingMode">
                        <% if not $Children || $HideChildrenFromNavigation  %>
                            <a href="$Link" title="$Title.XML" {$MenuTarget}>$MenuTitle.XML</a>
                        <% else %>
                            <a href="#" title="$Title.XML">
                                $MenuTitle.XML
                            </a>
                            <ul class="menu vertical">
                                <% loop $Children %>
                                    <li class="$LinkingMode"><a href="$Link"
                                                                title="$Title.XML" {$MenuTarget}>$MenuTitle.XML</a>
                                    </li>
                                <% end_loop %>
                            </ul>
                        <% end_if %>
                    </li>
                <% end_loop %>

                <li>
                    <a href="#">
                        Search
                    </a>
                    <ul class="menu vertical">
                        <li>
                            <% include SearchFormInline %>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>