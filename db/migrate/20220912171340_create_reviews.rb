class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :image_url
      t.text :review
      t.text :pro_tip
      t.integer :length_of_stay
      t.string :city
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :destination, null: false, foreign_key: true

      t.timestamps
    end
  end
end
