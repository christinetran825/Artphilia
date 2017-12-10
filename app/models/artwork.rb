class Artwork < ApplicationRecord
  belongs_to :artist
  belongs_to :medium

  before_validation :make_title_case

  validates_presence_of :title, :exhibition, :user_owned, :signed, :original, :rating, :comments, :medium

  def make_title_case
    self.title = self.title.titlecase
    self.exhibition = self.exhibition.titlecase
  end

  def medium_attributes=(medium)
    self.medium = Medium.find_or_create_by(medium)
    self.medium.update(medium)
  end
  #
  # def medium_attributes=(medium_attributes)
  #   medium_attributes.values.each do |medium_attribute|
  #     medium = Medium.find_or_create_by(medium_attribute)
  #     self.artwork_media.build(medium: medium)
  #   end
  # end
end
