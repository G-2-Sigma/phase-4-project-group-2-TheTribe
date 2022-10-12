class CreateRates < ActiveRecord::Migration[6.1]
  def change
    create_table :rates do |t|
      t.integer :rating
      t.integer :post_id
      t.integer :user_id
      t.timestamps
    end
  end
end
