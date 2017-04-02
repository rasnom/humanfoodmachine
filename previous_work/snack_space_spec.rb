require_relative 'snack_space'

describe SnackInfo do
	let (:snack_info) {SnackInfo.new}

	it "can search for product from the gov db by upc" do
		search_result = snack_info.upc_search("028400072731")
		expect(search_result).to include "FUNYUN"
	end

	it "saves the nbdno after a upc search" do
		search_result = snack_info.upc_search("028400072731")
		expect(snack_info.ndbno).to eq "45154886"
	end

	it "can pull down a food composition report by ndbno" do
		report = snack_info.lookup_food_report("45154886")
		expect(report['name']).to include "FUNYUN"
	end

	it "saves portions of food reports to a db" do
		snack_info.lookup_food_report("45154886")
		snack_info.lookup_food_report("")
		expect(snack_info.
end