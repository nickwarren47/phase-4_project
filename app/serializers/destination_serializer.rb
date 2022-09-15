class DestinationSerializer < ActiveModel::Serializer

  attributes :id, :country_or_territory, :continent, :flag_url, :image_url
 
  has_many :reviews

end
