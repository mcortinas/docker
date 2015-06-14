FROM mcortinas/centos7-jdk-8u45
MAINTAINER Marc Cortinas <marc.cortinas@gmail.com> (@mcortinas)

RUN wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.5.2.noarch.rpm -O /root/elasticsearch-1.5.2.noarch.rpm
RUN rpm -Uvh /root/elasticsearch-1.5.2.noarch.rpm
RUN rm -f /root/elasticsearch-1.5.2.noarch.rpm

ENV ELASTICSEARCH_VERSION 1.5.2

ENV PATH /usr/share/elasticsearch/bin:$PATH
COPY config /usr/share/elasticsearch/config

VOLUME /usr/share/elasticsearch/data

COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 9200 9300

CMD ["elasticsearch"]

LABEL vendor=Marc\ Cortinas\
      cat.cortinasval.docker.operatingsystem="CentOS" \
      cat.cortinasval.docker.operatingsystemmajrelease="7" \
      cat.cortinasval.docker.app="elasticsearch" \
      cat.cortinasval.docker.apprelease="1.5.2" \
      cat.cortinasval.docker.version="0.0.1-test" \
      cat.cortinasval.docker.release-date="2015-06-14"
