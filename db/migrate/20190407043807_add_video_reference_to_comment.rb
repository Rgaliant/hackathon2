class AddVideoReferenceToComment < ActiveRecord::Migration[5.2]
  def change
    add_reference :comments, :video, foreign_key: true
    add_column :videos, :dislikes, :integer, :default => 0
    add_column :comments, :body, :text
  end
end
