elasticsearch:
  image: mcortinas/elasticsearch
  volumes:
    - ./ES/01/config:/usr/share/elasticsearch/config
    - ./ES/01/data:/usr/share/elasticsearch/data
    - ./ES/plugins:/usr/share/elasticsearch/plugins
  ports:
    - "9200"
    - "9300"
  expose:
    - "9200"
    - "9300"
  environment:
    - DEBUG=true
  command: "elasticsearch"

elasticsearch02:
  image: mcortinas/elasticsearch
  volumes:
    - ./ES/02/config:/usr/share/elasticsearch/config
    - ./ES/02/data:/usr/share/elasticsearch/data
    - ./ES/plugins:/usr/share/elasticsearch/plugins
  ports:
    - "9200"
    - "9300"
  expose:
    - "9200"
    - "9300"
  environment:
    - DEBUG=true
  command: "elasticsearch"
