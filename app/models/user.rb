class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :password_hash, presence: true

  include BCrypt

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def self.authenticate(submitted_username, submitted_password)
    user = User.find_by(username: submitted_username)
    (user && user.password == submitted_password)
  end
end

