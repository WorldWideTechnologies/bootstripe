<div class="row">
    <div class="column">
        <article>
            <h1>$Title</h1>

            <% if $FeaturedImage %>
                <img class="article-image" data-interchange="[{$FeaturedImage.Url}, small]"
                     alt="">
            <% end_if %>

            {$Content}

            <% include EntryMeta %>
        </article>

        {$Form}
        {$CommentsForm}
    </div>

    <% include BlogSideBar %>
</div>

