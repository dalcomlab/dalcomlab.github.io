source "https://rubygems.org"

# Local-preview Gemfile for Hydejack Pro 9.2.1.
#
# The site is built by GitHub Pages' default builder (which uses its own
# `github-pages` gem environment and ignores this Gemfile). This Gemfile
# exists only so you can run `bundle exec jekyll serve` locally to preview
# changes before pushing.
#
# To use:
#   bundle install
#   bundle exec jekyll serve

gem "jekyll", "~> 4.3.0"

# Required for `jekyll serve` in Ruby 3
gem "webrick"

# Uncomment when building with the `--lsi` option for `jekyll build`
# gem "classifier-reborn"

group :jekyll_plugins do
  gem "jekyll-default-layout"
  gem "jekyll-feed"
  gem "jekyll-optional-front-matter"
  gem "jekyll-paginate"
  gem "jekyll-readme-index"
  gem "jekyll-redirect-from"
  gem "jekyll-relative-links"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-titles-from-headings"
  gem "jekyll-include-cache"

  # Not supported by GitHub Pages' default builder, but harmless here —
  # locally Jekyll will use it; on GitHub Pages it's just ignored.
  gem "jekyll-last-modified-at"
end

gem 'wdm' if Gem.win_platform?
gem "tzinfo-data" if Gem.win_platform?
