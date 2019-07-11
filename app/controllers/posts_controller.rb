class PostsController < ApplicationController
  def index
    @posts = Post.all.order("created_at DESC")
    render json: @posts, status: :ok
  end
  def show
    @post = Post.find(params[:id])
    render json: @post, status: :ok
  end
  def new
   @post = Post.new
   render json: @post, status: :ok
 end

 def create
    @post = Post.create(post_params)
    # redirect_to @posts
    render json: @post, status: :ok

 end
 def edit
   @post = Post.find(params[:id])
   render json: @post, status: :ok
 end

 def update
    @post = Post.find(params[:id])
   if @post.update(post_params)
     redirect_to posts_path
   else
     render :edit
   end
 end

 def destroy
   @post = Post.find(params[:id])
   @post.delete
   # redirect_to posts_path
 end

 private

 def post_params
   params.permit(:contact, :title, :image, :description)
 end
end
