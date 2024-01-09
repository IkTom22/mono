# test/controllers/sessions_controller_test.rb

require 'test_helper'

class SessionsControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  # test "should get new" do
  #   get new_user_session_url
  #   assert_response :success
  # end
  test "should login user" do
    user = users(:one)
    post user_session_url, params: { email: user.email, password: 'password' }
    assert_response :success
    puts "response #{@response.status} #{@response.body} #{@response.headers}"
    assert_includes @response.headers['Set-Cookie'], '_session_id'
  end
  # test "should create session" do
  #   user = users(:one) # Replace with your user fixture or factory
  #   post user_session_url, params: { user: { email: user.email, password: 'password' } }
  #   assert_response :success
  #   assert_signed_in :user
  # end

  # test "should destroy session" do
  #   sign_in users(:one) # Sign in a user before destroying the session
  #   delete destroy_user_session_url
  #   assert_response :redirect
  #   assert_redirected_to root_url
  #   assert_not_signed_in :user
  # end
end

