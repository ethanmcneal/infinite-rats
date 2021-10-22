class Api::RatsController < ApplicationController
before_action :set_params
    def index
        render json: Rat.page(@page).per(@per)
    end

    private

    def set_params
        @page = params[:page] || 1
        @per = params[:per] || 20
    end
end
