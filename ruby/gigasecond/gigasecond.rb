class Gigasecond
  def self.from(date)
    Time.at(date.to_time.to_i + 1*10**9).to_date
  end
end
