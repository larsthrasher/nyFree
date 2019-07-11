class PostsController < ApplicationController
  def index
    @posts = Post.all.order("created_at DESC")
    render json: @posts, status: :ok
  end
  def show
    @post = Post.find(params[:id])
    render json: @post, status: :ok
  end
end
