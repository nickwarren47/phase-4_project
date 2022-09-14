class CreateDestinations < ActiveRecord::Migration[6.1]
  def change
    create_table :destinations do |t|
      t.string :country_or_territory
      t.string :continent
      t.string :image_url 
      t.string :flag_url

      t.timestamps
    end
  end
end
