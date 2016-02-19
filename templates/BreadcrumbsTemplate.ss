<% if $Pages %>
    <ol>
        <% loop $Pages %>
            <% if $Last %>
                <li><a href="$Link">$MenuTitle.XML</a></li>
            <% else %>
                <li><a href="$Link">$MenuTitle.XML</a> &gt;</li>
            <% end_if %>
        <% end_loop %>
    </ol>
<% end_if %>