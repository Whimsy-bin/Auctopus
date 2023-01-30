package com.auctopus.project.api.response;

import java.util.List;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@Builder
public class AuctionListResponse {
    Boolean hasMore;
    Long categorySeq;
    List<AuctionListOneResponse> resList;
    public static AuctionListResponse of(Boolean hasMore, long categorySeq,List<AuctionListOneResponse> resList) {
        AuctionListResponse res = AuctionListResponse.builder()
                .hasMore(hasMore)
                .categorySeq(categorySeq)
                .resList(resList)
                .build();
        return res;
    }
}
