class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :post_id
      t.integer :user_id
      t.string :title
      t.string :rating
      t.timestamps
    end
  end
end
