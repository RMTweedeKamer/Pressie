class AddIdentifierToTemplates < ActiveRecord::Migration[5.2]
  def change
    add_column :templates, :identifier, :string
  end
end
