# lib/tasks/reset_and_reseed.rake

namespace :db do
    desc 'Reset and reseed the database'
    task reset_and_reseed: :environment do
      Rake::Task['db:reset'].invoke
      Rake::Task['db:seed'].invoke
    end
  end

  