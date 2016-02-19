<div class="row ac-mg-b-15">
    <% if $FeaturedImage %>
        <div class="column small-3">
            <a href="$Link">
                $RenderBootstrapImage($FeaturedImage.ID, 12, 4)
            </a>
        </div>
    <% end_if %>
    <div class="column">
        <h2>
            <a href="$Link">
                <% if $MenuTitle %>$MenuTitle
                <% else %>$Title<% end_if %>
            </a>
        </h2>

        <% if $Summary %>
            <p>$Summary</p>
        <% else %>
            <p>$Excerpt</p>
        <% end_if %>
        <p>
            <a href="$Link">
                Read More
            </a>
        </p>

        <% include EntryMeta %>
    </div>
</div>
