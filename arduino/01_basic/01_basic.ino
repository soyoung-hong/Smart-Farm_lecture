#include "DHT.h"

#define SW-PIN 2 
#define LED_PIN 13
#define RED_LED 3
#define GREEN_LED 6
#define BLUE_LED 5
#define TRIG_PIN 11
#define ECHO_PIN 10
#define RELAY_PIN 4
#define CDS_PIN A0
#define DHT_PIN 8

float ultraSonic();
DHT dht(DHT_PIN, DHT11);


void setup() {
  Serial.begin(9600);

  pinMode(LED_PIN, OUTPUT);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, OUTPUT);
  pinMode(RED_LED, OUTPUT);
  pinMode(GREEN_LED, OUTPUT);
  pinMode(BLUE_LED, OUTPUT);
  pinMode(RELAY_PIN, OUTPUT);
  dht.begin();
  delay(3000);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  Serial.print("humidity: ");
  Serial.println(humidity);
  Serial.print("Temperature: ");
  Serial.println(temperature);
  int cds =analogRead(CDS_PIN);
  Serial.print("CDS: ");
  Serial.println(cds);
  float distance = ultraSonic();
  Serial.print("Distance: ");
  Serial.println(distance);

  int red = random(0,255);
  int green = random(0,255);
  int blue = random(0,255);
  analogWrite(RED_LED, red);
  analogWrite(GREEN_LED, green);
  analogWrite(BLUE_LED, blue);
  char buffer[80];
  sprintf(buffer, "Red: %d, Greed: %d, Blue: %d", red, green, blue);  
  Serial.println(buffer);
  digitalWrite(RELAY_PIN, digitalRead(RELAY_PIN)^1);
  delay(3000);
}
float ultraSonic(){   
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  unsigned long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = ((float)(340*duration)/10000)/2;
  return distance;
}
