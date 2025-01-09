class ArticlesController < ApplicationController
  require 'net/http'
  def index
    @articles = [];
  end

  def fetch_data
    response = Net::HTTP.get(URI("https://jsonplaceholder.typicode.com/posts"))
    @articles = JSON.parse(response)

    render  turbo_stream: turbo_stream.append(
      "article-list",
      partial: 'article',
      collection: @articles.first(5),
      as: :article
    )
  end
end
