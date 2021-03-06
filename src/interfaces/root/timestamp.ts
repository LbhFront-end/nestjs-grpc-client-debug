/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from 'grpc';

export namespace google {
    export namespace protobuf {
        // A Timestamp represents a point in time independent of any time zone or local
        // calendar, encoded as a count of seconds and fractions of seconds at
        // nanosecond resolution. The count is relative to an epoch at UTC midnight on
        // January 1, 1970, in the proleptic Gregorian calendar which extends the
        // Gregorian calendar backwards to year one.
        // 
        // All minutes are 60 seconds long. Leap seconds are &quot;smeared&quot; so that no leap
        // second table is needed for interpretation, using a [24-hour linear
        // smear](https://developers.google.com/time/smear).
        // 
        // The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By
        // restricting to that range, we ensure that we can convert to and from [RFC
        // 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.
        // 
        // # Examples
        // 
        // Example 1: Compute Timestamp from POSIX &#x60;time()&#x60;.
        // 
        // Timestamp timestamp;
        // timestamp.set_seconds(time(NULL));
        // timestamp.set_nanos(0);
        // 
        // Example 2: Compute Timestamp from POSIX &#x60;gettimeofday()&#x60;.
        // 
        // struct timeval tv;
        // gettimeofday(&amp;tv, NULL);
        // 
        // Timestamp timestamp;
        // timestamp.set_seconds(tv.tv_sec);
        // timestamp.set_nanos(tv.tv_usec * 1000);
        // 
        // Example 3: Compute Timestamp from Win32 &#x60;GetSystemTimeAsFileTime()&#x60;.
        // 
        // FILETIME ft;
        // GetSystemTimeAsFileTime(&amp;ft);
        // UINT64 ticks &#x3D; (((UINT64)ft.dwHighDateTime) &lt;&lt; 32) | ft.dwLowDateTime;
        // 
        // // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z
        // // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.
        // Timestamp timestamp;
        // timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));
        // timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));
        // 
        // Example 4: Compute Timestamp from Java &#x60;System.currentTimeMillis()&#x60;.
        // 
        // long millis &#x3D; System.currentTimeMillis();
        // 
        // Timestamp timestamp &#x3D; Timestamp.newBuilder().setSeconds(millis / 1000)
        // .setNanos((int) ((millis % 1000) * 1000000)).build();
        // 
        // 
        // Example 5: Compute Timestamp from Java &#x60;Instant.now()&#x60;.
        // 
        // Instant now &#x3D; Instant.now();
        // 
        // Timestamp timestamp &#x3D;
        // Timestamp.newBuilder().setSeconds(now.getEpochSecond())
        // .setNanos(now.getNano()).build();
        // 
        // 
        // Example 6: Compute Timestamp from current time in Python.
        // 
        // timestamp &#x3D; Timestamp()
        // timestamp.GetCurrentTime()
        // 
        // # JSON Mapping
        // 
        // In JSON format, the Timestamp type is encoded as a string in the
        // [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the
        // format is &quot;{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z&quot;
        // where {year} is always expressed using four digits while {month}, {day},
        // {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional
        // seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),
        // are optional. The &quot;Z&quot; suffix indicates the timezone (&quot;UTC&quot;); the timezone
        // is required. A proto3 JSON serializer should always use UTC (as indicated by
        // &quot;Z&quot;) when printing the Timestamp type and a proto3 JSON parser should be
        // able to accept both UTC and other timezones (as indicated by an offset).
        // 
        // For example, &quot;2017-01-15T01:30:15.01Z&quot; encodes 15.01 seconds past
        // 01:30 UTC on January 15, 2017.
        // 
        // In JavaScript, one can convert a Date object to this format using the
        // standard
        // [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
        // method. In Python, a standard &#x60;datetime.datetime&#x60; object can be converted
        // to this format using
        // [&#x60;strftime&#x60;](https://docs.python.org/2/library/time.html#time.strftime) with
        // the time format spec &#x27;%Y-%m-%dT%H:%M:%S.%fZ&#x27;. Likewise, in Java, one can use
        // the Joda Time&#x27;s [&#x60;ISODateTimeFormat.dateTime()&#x60;](
        // http://www.joda.org/joda-time/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime%2D%2D
        // ) to obtain a formatter capable of generating timestamps in this format.
        export interface Timestamp {
            // Represents seconds of UTC time since Unix epoch
        // 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
        // 9999-12-31T23:59:59Z inclusive.
            seconds?: number;
            // Non-negative fractions of a second at nanosecond resolution. Negative
        // second values with fractions must still have non-negative nanos values
        // that count forward in time. Must be from 0 to 999,999,999
        // inclusive.
            nanos?: number;
        }
    }
}

