<div class="container">
    <div class="row">
        <div class="col-sm-12">
            $Content
            <% if $Query %>
                <% include SearchFormInline Value=$Query %>
                <h4>Showing: $Results.FirstItem - $Results.LastItem  of $Results.getTotalItems results.</h4>
                <hr>
            <% end_if %>
            <% if $Results %>
                <% loop $Results %>
                    <% include SearchSummary %>
                <% end_loop %>
            <% else %>
                <h4>Sorry, your search query did not return any results.</h4>
            <% end_if %>

            <% with $Results %>
                <% include Pagination %>
            <% end_with %>

        </div>
    </div>
</div>
