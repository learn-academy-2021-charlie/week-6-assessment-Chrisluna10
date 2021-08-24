# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller BlogPosts is recieving information from the ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2) A variable is created to return all of the blog posts that were saved as arrays. 
    @posts = BlogPost.all
  end

  def show
    # ---3) This variable is allowing the user to search for a specific blog post by id.
    @post = BlogPost.find(params[:id])
  end

  # ---4) This code is defining a new method to allow the user to create a new post.
  def new
    @post = Post.new
  end

  def create
    # ---5) This code is taking in the private code block in order to only allow the creation of new blog posts with certain parameters.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) The edit method allows for the user to search for a certain id and make changes to that id.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The update method takes in the private params method to only allow updates with those certain parameters.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the blog post is not destroyed correctly, the user will be redirected to that same blog post that they were trying to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Everything below private is hidden from the user and can not be ran in the code.
  private
  def blog_post_params
    # ---10) This makes certain parameters necessary to run certain methods. Such as a new blog post requires a title and content to be created.
    params.require(:blog_post).permit(:title, :content)
  end
end
