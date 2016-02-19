<div class="row">
    <div class="column">
        <article>
            <h1>
                $Title
            </h1>
            <% if $PaginatedList.Exists %>
                <% loop $PaginatedList %>
                    <% include PostSummary %>
                <% end_loop %>
            <% else %>
                <p><%t Blog.NoPosts "There are no posts" %></p>
            <% end_if %>
        </article>

        $Form
        $CommentsForm

        <% with $PaginatedList %>
            <% include Pagination %>
        <% end_with %>
    </div>
    <% include BlogSideBar %>
</div>

