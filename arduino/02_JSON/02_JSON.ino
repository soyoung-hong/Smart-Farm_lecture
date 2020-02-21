#include "DHT.h"
#include <ArduinoJson.h>
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

StaticJsonDocument<80> doc;



void setup() {
  Serial.begin(9600);

  pinMode(LED_PIN, OUTPUT);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
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
  doc["humidity"] = humidity;
  doc["temperature"] = temperature;
  int cds = analogRead(CDS_PIN);
  doc["cds"] = cds;
  float distance = ultraSonic();
  doc["distance"] = distance;

  serializeJson(doc, Serial);
  Serial.println("\n");
  delay(10000);
}
  float ultraSonic(){   
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  unsigned long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = ((float)(340*duration)/10000)/2;
  return distance;
}
  
