class Api::RatsController < ApplicationController

    before_action :set_params

    def index
        rats = Rat.page(@page).per(@per_page)
        count = Rat.count
        render json: {rats: rats, count: count}
    end
    
    private

    def set_params
        @page = params[:page] || 1
        @per_page = params[:per] || 10
    end
end
