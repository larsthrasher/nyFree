class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :contact
      t.string :title
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
