class RemovePostFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_reference :comments, :video, index: true, foreign_key: true
  end
end
