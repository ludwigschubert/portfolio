###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# configure :development do
#   activate :livereload
# end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

# Front-End Javascript
sprockets.append_path File.join root, '/source/vendor/assets'
sprockets.import_asset 'jquery'
sprockets.import_asset 'modernizr/modernizr.js'
sprockets.import_asset 'shufflejs'

# Blog / Projects
activate :blog do |blog|
  blog.sources = "blog/{category}/{year}-{month}-{day}-{title}.html"
  blog.permalink = "{year}/{month}/{day}/{title}.html"
end

# page "/information.html", layout: 'layout'

# development configuration
configure :development do
  activate :livereload
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  compass_config do |config|
    config.output_style = :expanded
    config.line_comments = false
  end

  # Minify on build

  activate :minify_css
  activate :minify_javascript, ignore: 'vendor'
  
  activate :gzip

  # Compress images
  # https://github.com/toy/image_optim#binaries-installation
  # activate :imageoptim

  # Enable cache buster
  # activate :asset_hash # disabled because images for now

  # Use relative URLs
  activate :relative_assets
  set :relative_links, true

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

# Deployment
# Credentials are in ignored .s3_sync file
activate :s3_sync do |s3_sync|
  s3_sync.bucket                     = 'norcal.schubert.io'
  s3_sync.region                     = 'us-west-1'     # The AWS region for your bucket.
  s3_sync.prefer_gzip                = true
  # s3_sync.prefix                     = 'portfolio/'
end

helpers do
  # def article_images article
  #   directory_name = article.source_file.split('.')[0]
  #   Dir[]
  # end

  def article_thumbnail article
    directory_name = article.source_file.split('.')[0]
    relative_path = directory_name.split('/').last
    relative_path + '-thumbnail.jpg'
  end
end