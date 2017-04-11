class Snack < ActiveRecord::Base
  validates :name, :nbdno, :upc, :serving, presence: true
  validates :energy, :protein, :fat, :carbohydrates, presence: true
  validates :name, :nbdno, :upc, uniqueness: true

  def self.search(terms) 
  	search_terms = terms.gsub(' ','+')
  	response = HTTParty.get("https://api.nal.usda.gov/ndb/search/" +
  		"?format=json&q=#{search_terms}&max=50" +
			"&ds=Branded+Food+Products&api_key=#{ENV['NDB_API_KEY']}")
  	search_results = []
  	JSON.parse(response.body)['list']['item'].each do |result| 
  		search_results << result[:name]
  	end
  end 
end
