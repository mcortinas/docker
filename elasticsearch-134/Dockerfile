FROM mcortinas/docker:centos7-jdk-7u45-latest
MAINTAINER Marc Cortinas <marc.cortinas@gmail.com> (@mcortinas)

RUN wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.3.4.noarch.rpm -O /root/elasticsearch-1.3.4.noarch.rpm
RUN rpm -Uvh /root/elasticsearch-1.3.4.noarch.rpm
RUN rm -f /root/elasticsearch-1.3.4.noarch.rpm

ENV ELASTICSEARCH_VERSION 1.3.4

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
      cat.cortinasval.docker.apprelease="1.3.4" \
      cat.cortinasval.docker.version="0.0.1-test" \
      cat.cortinasval.docker.release-date="2015-06-14"\
      description="CentOS 7 official image with oracle jdk 7u45\
      adding elasticsearch version 1.3.4"

