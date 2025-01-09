class CreateArticles < ActiveRecord::Migration[8.0]
  def change
    create_table :articles do |t|
      t.string :body
      t.string :title
      t.timestamps
    end
  end
end
