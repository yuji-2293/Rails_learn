class CreateMemos < ActiveRecord::Migration[8.0]
  def change
    create_table :memos do |t|
      t.string :content
      t.boolean :completed

      t.timestamps
    end
  end
end
