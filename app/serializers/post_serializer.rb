class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :category, :content

end
