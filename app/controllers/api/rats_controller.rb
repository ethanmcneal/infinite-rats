class Api::RatsController < ApplicationController
before_action :set_page
    def index
        render json: Rat.all
    end

    private

    def set_page
        @page = params[:page] || 1
    end
end
