class AddColumnToDestination < ActiveRecord::Migration[6.1]
  def change
    add_column :destinations, :flag_url, :string
    add_column :destinations, :image_url, :string
  end
end
