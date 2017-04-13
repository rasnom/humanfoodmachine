class Snack < ActiveRecord::Base
  validates :name, :ndbno, :serving, presence: true
  validates :upc, :energy, :protein, :fat, :carbohydrates, presence: true
  validates :name, :ndbno, uniqueness: true

  def self.search(terms)
  	search_terms = terms.gsub(' ','+')
    api_query = "https://api.nal.usda.gov/ndb/search/" +
      "?format=json&q=#{search_terms}&max=50" +
      "&ds=Branded+Food+Products&api_key=#{ENV['NDB_API_KEY']}"
  	response = HTTParty.get(api_query)
  	search_results = []
  	JSON.parse(response.body)['list']['item'].each do |result|
  		search_results << result[:name]
  	end
  end

  def initialize(args)
  	super
    api_query = "https://api.nal.usda.gov/ndb/reports" +
      "?format=json&type=f&ndbno=" + ndbno +
      "&ds=Branded+Food+Products&api_key=#{ENV['NDB_API_KEY']}"
    response = HTTParty.get(api_query)
    report = response['report']['food']
    self.name = /^.*,/.match(report['name'])
    self.serving = report['nutrients'][0]['measures'][0]['qty'].to_s + ' ' +
                   report['nutrients'][0]['measures'][0]['label']
    self.upc = /\d*$/.match(report['name'])
    nutrients = report['nutrients']
    nutrients.each do |nutrient|
      case nutrient['name']
      when 'Energy'
        if nutrient['unit'] == 'kcal'
          self.energy = nutrient['value']
        end
      when 'Protein'
        self.protein = nutrient['value']
      when 'Total lipid (fat)'
        self.fat = nutrient['value']
      when 'Carbohydrate, by difference'
        self.carbohydrates = nutrient['value']
      end
    end

  end

end

